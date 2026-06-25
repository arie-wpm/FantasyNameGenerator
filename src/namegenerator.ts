import MurmurHash from "imurmurhash";
import placePrefixes from './assets/prefix.json';
import placeSuffixes from './assets/placesuffix.json';

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
	console.log(start);
	var end = sourceName.substring(sourceName.length/2, 999);
	console.log(end);
	var preIndex = GetHash(start, placePrefixes.length);	
	var prefix = placePrefixes[preIndex]; 
	var endIndex = GetHash(end, placeSuffixes.length);	
	var suffix = placeSuffixes[endIndex];

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
