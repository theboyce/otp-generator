const code = document.getElementById('otp');
const container = document.querySelector('container');

function generateOTP() {
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

code.value = generateOTP();

document.getElementById('copy-btn').addEventListener('click', ()=>{
  var copyText = document.getElementById('otp');

  copyText.select();

  if (navigator.clipboard.writeText(copyText.value)){
    alert('Copied the text: ' + copyText.value);
  }
}
);
  





