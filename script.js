window.promises = [];
function randomPromises(value){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(value);
		}, Math.floor(Math.random*5));
	})
}
promises.push(randomPromises('Promise1'));
promises.push(randomPromises('Promise2'));
promises.push(randomPromises('Promise3'));
promises.push(randomPromises('Promise4'));
promises.push(randomPromises('Promise5'));
Promise.any(promises)
		.then((result)=>{
				document.getElementById('output').innerHTML = result;
		})
		.catch(err=>console.log(err))
// Do not change the code above this
// add your promises to the array `promises`