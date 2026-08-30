// Balance :
// انا عاوز اسجل العملياااااااات التي حدث في ال System واسجل جوه كل عملية تفاااااااصيل كتيرة عن هذه العملية
// Array [obj ,obj ,obj];

// Steady States
let balance = 0;
const passwordDB = '1234';
const transactionHistory = [];

const showBalance = () => {
  let pass = prompt('Please enter your password');
  console.clear();
  if (pass == passwordDB) {
    console.log(`Your Balance is : ${balance}`);
  } else {
    console.log('Invalid Password');
  }
};

const depositAmount = () => {
  let pass = prompt('Please enter your password');
  console.clear();
  if (pass == passwordDB) {
    let amount = +prompt('Please enter Amount you want to deposit');
    let transaction = {
      beforeBalance: balance,
      amount: amount,
      type: 'deposite',
      afterBalance: balance + amount,
    };
    transactionHistory.push(transaction);
    // الرصيد اتغير
    balance += amount;
    console.log(`Your Balance is : ${balance}`);
  } else {
    console.log('Invalid Password');
  }
};

const withdrawAmount = () => {
  let pass = prompt('Please enter your password');
  console.clear();
  if (pass == passwordDB) {
    let amount = +prompt('Please enter Amount you want to deposit');
    if (amount <= balance) {
      let transaction = {
        beforeBalance: balance,
        amount: amount,
        type: 'withdraw',
        afterBalance: balance - amount,
      };
      transactionHistory.push(transaction);
      balance -= amount;
      console.log(`Your Balance is : ${balance}`);
    } else {
      console.log(`انت شحات يا اسطي مفيش الفلوس اللي عاوز تسحبها ديه رصيدك هو  is : ${balance}`);
    }
  } else {
    console.log('Invalid Password');
  }
};

const showHistory = () => {
  console.clear();
  console.table(transactionHistory);
};
