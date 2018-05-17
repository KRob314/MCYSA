FROM microsoft/aspnetcore:2.0-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
WORKDIR /src
COPY MCYSA.csproj ./
RUN dotnet restore MCYSA.csproj
COPY . .
WORKDIR /src/
RUN dotnet build MCYSA.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish MCYSA.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MCYSA.dll"]

#COPY dist /app
#WORKDIR /app
#EXPOSE 80/tcp
#ENTRYPOINT ["dotnet", "MCYSA.dll"]

