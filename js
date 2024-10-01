const openSecondFormButton = document.getElementById('open_second_form');
const openSecondFormButton1 = document.getElementById('open_second_form1');
const firstForm = document.getElementById('user_id');
const secondForm = document.getElementById('admin_id');
openSecondFormButton.addEventListener('click', function() {
    firstForm.style.display = 'none';
    secondForm.style.display = 'block';
});
openSecondFormButton1.addEventListener('click', function() {
    firstForm.style.display = 'block';
    secondForm.style.display = 'none';
});
