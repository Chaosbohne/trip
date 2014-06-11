if(Travels.find().count() === 0) {
 
  console.log('fixturing travels');
  
  var vietnam = Countries.find({name : "Vietnam"});
  var venezuela = Countries.find({name : "Venezuela"});
  
  var travelvietnam = Travels.insert({
    title: "My super jounrey JUST in vietnam",
    countryId : [vietnam._id]
  });
  
  var travelvietnamVenezuela = Travels.insert({
    title: "My super jounrey in vietnam AND venezuela",
    countryId : [vietnam._id, venezuela._id]
  });
  
}