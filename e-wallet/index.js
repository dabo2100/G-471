// Balance :
// انا عاوز اسجل العملياااااااات التي حدث في ال System واسجل جوه كل عملية تفاااااااصيل كتيرة عن هذه العملية
// Array [obj ,obj ,obj];

// Steady States
let balance = 0;
let hasLogged = false;
const passwordDB = '1234';
const transactionHistory = [];

const makeDeposit = () => {
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
};

const makeWithdraw = (amount) => {
  let transaction = {
    beforeBalance: balance,
    amount: amount,
    type: 'withdraw',
    afterBalance: balance - amount,
  };
  transactionHistory.push(transaction);
  balance -= amount;
  console.log(`Your Balance is : ${balance}`);
};

const showBalance = () => {
  console.clear();

  if (hasLogged == false) {
    let pass = prompt('Please enter your password');
    if (pass == passwordDB) {
      console.log(`Your Balance is : ${balance}`);
      hasLogged = true;
    } else {
      console.log('Invalid Password');
    }
  } else {
    console.log(`Your Balance is : ${balance}`);
  }
};

const depositAmount = () => {
  console.clear();

  if (hasLogged == false) {
    let pass = prompt('Please enter your password');
    if (pass == passwordDB) {
      hasLogged = true;
      makeDeposit();
    } else {
      console.log('Invalid Password');
    }
  } else {
    makeDeposit();
  }
};

const withdrawAmount = () => {
  console.clear();

  if (hasLogged == false) {
    let pass = prompt('Please enter your password');
    if (pass == passwordDB) {
      hasLogged = true;
      let amount = +prompt('Please enter Amount you want to deposit');
      if (amount <= balance) {
        makeWithdraw(amount);
      } else {
        console.log(`انت شحات يا اسطي مفيش الفلوس اللي عاوز تسحبها ديه رصيدك هو  is : ${balance}`);
      }
    } else {
      console.log('Invalid Password');
    }
  } else {
    let amount = +prompt('Please enter Amount you want to deposit');
    if (amount <= balance) {
      makeWithdraw(amount);
    } else {
      console.log(`انت شحات يا اسطي مفيش الفلوس اللي عاوز تسحبها ديه رصيدك هو  is : ${balance}`);
    }
  }
};

const showHistory = () => {
  console.clear();

  if (hasLogged == false) {
    let pass = prompt('Please enter your password');
    if (pass == passwordDB) {
      hasLogged = true;
      console.table(transactionHistory);
    } else {
      console.log('Invalid Password');
    }
  } else {
    console.table(transactionHistory);
  }
};
