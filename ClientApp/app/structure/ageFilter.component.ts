import { Component } from '@angular/core';
import { Repository } from "../models/repository";

@Component({
    selector: "age-filter",
    templateUrl: "ageFilter.component.html"
})

export class AgeFilterComponent
{

    constructor(private repo: Repository) { }

    setAge(age: number)
    {
        this.repo.filter.age = age;
        this.repo.getTeams();
    }
}