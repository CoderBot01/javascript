const sum = (...nums) =>{
    console.log(nums.reduce((total,num) => total+num,0));
}
sum(12,3,4,5,67,8,0);
