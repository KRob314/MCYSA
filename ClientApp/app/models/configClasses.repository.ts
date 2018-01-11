export class Filter
{
    state?: string;
    age?: number;
    search?: string;
    related: boolean = false;

    reset()
    {
        this.state = this.search = null;
        this.age = null;
        this.related = false;
    }
}