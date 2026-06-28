import MurmurHash from "imurmurhash";
import PlacePrefixes from './assets/placeprefix.json';
import PlaceSuffixes from './assets/placesuffix.json';
import PersonPrefixes from './assets/personprefix.json';
import PersonSuffixes from './assets/personsuffix.json';
import CreaturePrefixes from './assets/creatureprefix.json';
import CreatureSuffixes from './assets/creaturesuffix.json';


export function generateName(button: HTMLButtonElement, input: HTMLInputElement, display: HTMLElement): void{
	button.innerHTML = 'Generate'
	button.addEventListener('click', async () => {
		const userInput: string = input.value;
		let returnVal = MakeName(userInput);
		display.innerText = returnVal;
		return returnVal;
	})
}

function MakeName(sourceName: string):string{
	var start = sourceName.substring(0, sourceName.length/2);
	var end = sourceName.substring(sourceName.length/2, 999);
	var genSelection = document.querySelector('input[name="genoption"]:checked') as HTMLInputElement;
	var preIndex: number;
	var prefix:string;
	var endIndex:number;

	var suffix:string;
	switch(genSelection?.value){
		case "place":
			preIndex = GetHash(start, PlacePrefixes.length);		
			prefix = PlacePrefixes[preIndex]; 
			endIndex = GetHash(end, PlaceSuffixes.length);
			suffix = PlaceSuffixes[endIndex];
			break;
		case "person":
			preIndex = GetHash(start, PersonPrefixes.length);		
			prefix = PersonPrefixes[preIndex] + " "; 
			endIndex = GetHash(end, PersonSuffixes.length);
			suffix = PersonSuffixes[endIndex];
			break;
		case "creature":
			preIndex = GetHash(start, CreaturePrefixes.length);		
			prefix = CreaturePrefixes[preIndex]; 
			endIndex = GetHash(end, CreatureSuffixes.length);
			suffix = CreatureSuffixes[endIndex];
			break;
		default:
			prefix = "";
			suffix = "Please Choose which kind of name you want to generate."
			break;
	}

	var result = prefix + suffix;
	result.charAt(0).toUpperCase();
	return result;
}

function GetHash(str:string, range:number):number{
	var hashStateStart = MurmurHash(str);	
	var result = hashStateStart.result();	
	console.log("Hash Result = " + result);
	result %= range;
	console.log("Hash Result after modulo = " + result);
 	return result;
}
