var mydict={
    1:'navgurukul',
    2:"in",
    3:{
        'a':"welcome",
        'b':'to',
        'c':'dharmasala'

    }
}
for (i in mydict){
    if ((typeof mydict[i])==="object"){
        delete mydict[i]['a']
    }
}
console.log(mydict);
