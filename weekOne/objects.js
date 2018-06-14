 const students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June '}
];

	for (const student of students) {
	console.log(`Name: ${student.name}, Cohort: ${student.cohort}`);
};


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for(user in users){
	console.log(user.toUpperCase());
	for(let i = 0; i < users[user].length; i++){
		const num = i+1;
		const lname = users[user][i].last_name;
		const fname = users[user][i].first_name;
		const count = lname.length + fname.length;
		console.log(`${num}- ${lname}, ${fname} - ${count}`);
	}
};















