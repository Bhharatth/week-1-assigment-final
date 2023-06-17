/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {
  const spendEstimates = {};
  
    for(let i = 0; i<transactions.length; i++){
      let t = transactions[i];
  
      if(spendEstimates[t.category]){
        spendEstimates[t.category] = spendEstimates[t.category] + t.price;
        
      }else{
        spendEstimates[t.category] = 0;
        spendEstimates[t.category] =  spendEstimates[t.category] + t.price;
        
      }
    }
    let keys = Object.keys(spendEstimates);
  
    let answer = [];
    for(let i = 0; i<keys.length; i++){
      let category = keys[i]
     let obj ={
      category: category,
        totalSpend: spendEstimates[category],
      }
    answer.push(obj);
    }
  return answer;
  };

module.exports = calculateTotalSpentByCategory;
