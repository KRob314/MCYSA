using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using MCYSA.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Antiforgery;
using MCYSA.Services;


namespace MCYSA
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<McysaContext>(options => options.UseSqlServer(Configuration["Data:MCYSA:ConnectionString"]));         
            services.AddScoped<IGamesRepository, GamesRepository>();
            services.AddScoped<IPlayerRepository, PlayerRepository>();
            services.AddScoped<IBallparkRepository, BallparkRepository>();
            //services.AddMvc();
            //services.AddMvc().AddJsonOptions(opts =>
            //opts.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            services.AddAntiforgery(options => {
                options.HeaderName = "X-XSRF-TOKEN";
            });

            services.AddMvc().AddJsonOptions(opts =>
            {
                opts.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Serialize;
                opts.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IAntiforgery antiforgery)
        {
            app.UseDeveloperExceptionPage();
            app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
            {
                HotModuleReplacement = true
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.Use(nextDelegate => context => {
                if (context.Request.Path.StartsWithSegments("/api") || context.Request.Path.StartsWithSegments("/"))
                {
                    context.Response.Cookies.Append("XSRF-TOKEN",
                    antiforgery.GetAndStoreTokens(context).RequestToken);
                }
                return nextDelegate(context);
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute("angular-fallback", new { controller = "Home", action = "Index" });
            });

            //SeedData.SeedDatabase(app.ApplicationServices.GetRequiredService<McysaContext>());
        }
    }
}
