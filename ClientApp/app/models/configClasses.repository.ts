export class Filter
{
    state?: string;
    search?: string;
    related: boolean = false;

    reset()
    {
        this.state = this.search = null;
        this.related = false;
    }
}