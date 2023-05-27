try {
	console.log("try:konogyouhajikkousaremasu");
	undefinedFunction();
}
catch(error) {
	console.log("catch:konogyouhajikkousareamsu");
	console.log(error instanceof ReferenceError);
	console.log(error.message);
}
finally {
	console.log("finally:konogyouhajikkousaremasu");
}
