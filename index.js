function change(){
	document.getElementById('new-task-date').value='text';
	document.getElementById('new-task-date').ariaPlaceholder='Due';
}
document.addEventListener('DOMContentLoaded',() =>{
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const desp=document.querySelector('#new-task-des');
	const date_inp=document.querySelector('#new-task-date');
	const bin_add=document.querySelector('#third');
	var co=0;
	var comp=0;
	const delete_all=document.createElement('i');
		delete_all.classList.add('bin');

		delete_all.addEventListener('click', (e) => {
			while (list_el.firstChild) {
				list_el.removeChild(list_el.firstChild);
			}
		});
	bin_add.appendChild(delete_all);
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		const des=desp.value;
		var date=date_inp.value;
		
		if(!task){
			alert("Fill the Details")
		}
		else{
	

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);
		

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);
		
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_done_el = document.createElement('button');
		task_done_el.classList.add('done');
		task_done_el.innerText = 'Done';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const arrow = document.createElement('button');
		arrow.classList.add('collapse');
		arrow.innerText = "⇅";
		//task_actions_el.appendChild(arrow);
		
		
		task_actions_el.appendChild(task_done_el);
		task_actions_el.appendChild(task_delete_el);
		

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		//uhuehaeuhuhauhfuahefuhafhkuaehffauhfiuahiuhuiaehfiuhaeihfiuhifhhihfhaehfihfiueifhibififbiubiuueiueaiufibeafauiuiefbubi

		const desp_el = document.createElement('div');
		desp_el.classList.add('task_des');


		const desp_content_el = document.createElement('div');
		desp_content_el.classList.add('descrp');
		
		desp_el.appendChild(desp_content_el);

		const desp_input_el = document.createElement('input');
		desp_input_el.classList.add('des');
		desp_input_el.type = 'text';
		desp_input_el.value = des;
		desp_input_el.setAttribute('readonly', 'readonly');
		desp_input_el.style.display='none';
		desp_el.style.display='none';
		desp_content_el.appendChild(desp_input_el);
		
		desp_el.appendChild(desp_content_el);

		list_el.appendChild(desp_el);
		desp.value='';
		
		
		//ahushfbaefkheauhfkhfukhakfhaeufhaeuhfeuhfuaehufhafuifhiueaefh

		const desp_i_el = document.createElement('input');

		desp_i_el.classList.add('date');
		desp_i_el.type = 'text';
		
		if(date==''){
			date='Due: '+ new Date().toLocaleDateString('en-GB');
		}
		else{
			date=String('Due: ') + new Date(date).toLocaleDateString('en-GB');
		}
		desp_i_el.value = date;
		desp_i_el.setAttribute('readonly', 'readonly');
		desp_i_el.style.display='none';

		desp_content_el.appendChild(desp_i_el);
		desp_el.appendChild(desp_content_el);

		list_el.appendChild(desp_el);
		date.value=' ';

		task_content_el.addEventListener('click', (e) => {
			if (desp_el.style.display=='none') {
				desp_el.style.display='block';
				desp_input_el.style.display='block';
				desp_i_el.style.display='block';
			}
			else{
					desp_el.style.display='none';
					desp_input_el.style.display='none';
					desp_i_el.style.display='none';
			}
			
		});

		task_done_el.addEventListener('click', (e) => {
			if (task_done_el.innerText.toLowerCase() == "done") {
				task_input_el.style.textDecoration='line-through';
				desp_input_el.style.textDecoration='line-through';
				desp_i_el.style.textDecoration='line-through';
				task_input_el.focus();
				desp_input_el.focus();
				comp=comp+1;
				task_done_el.innerText=" ";

			} else {
				task_done_el.innerText = "Done";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
			list_el.removeChild(desp_el);
			
		});}
	});
})
}); 
