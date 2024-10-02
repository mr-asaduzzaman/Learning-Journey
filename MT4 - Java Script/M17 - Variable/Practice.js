var Check = isNaN(90); // জিগাইতেছি ৯০ কি একটা NotaNumber NaN?

console.log(Check); //উত্তর দিবে ফলস, অর্থাৎ ৯০ নান না, এটি একটি নাম্বার।


var ReCheck = isNaN("Rakib");

console.log(ReCheck); //উত্তর দিবে ট্রু, অর্থাৎ রাকিব নান, এটি একটি নাম্বার নয়।