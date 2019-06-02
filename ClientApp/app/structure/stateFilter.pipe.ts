import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'filterUniqueStates',
	pure: false
})
export class StateFilterPipe implements PipeTransform
{

	transform(value: any, args?: any): any
	{
		console.log("stateFilterUnique");
		// Remove the duplicate elements
		//let uniqueArray = value.filter(function (el, index, array)
		//{
		//	return array.indexOf(el) == index;
		//});

		var states = [];
		var uniqueArray = Array.from(new Set(value));

		for (var i = 0; i < value.length; i++)
		{
			if (states.indexOf(value[i].stateId) == -1)
			{
				console.log(value[i].stateId);
				states.push(value[i].stateId);
			}
		}


		console.log(uniqueArray);

		return states;
	}
}