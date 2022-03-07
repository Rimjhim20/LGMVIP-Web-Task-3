   
        function addStudent()
        {
            var date= document.sample.date.value;
            var name= document.sample.name.value;
            var rollNo= document.sample.rollNo.value;
            var branch = document.sample.branch.value;
            var year= document.sample.year.value;
            var email= document.sample.email.value;
            var website= document.sample.website.value;
            var gender= document.sample.gender.value;
            var tr= document.createElement('tr');
            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));
            var td3 = tr.appendChild(document.createElement('td'));
            var td4 = tr.appendChild(document.createElement('td'));
            var td5 = tr.appendChild(document.createElement('td'));
            var td6 = tr.appendChild(document.createElement('td'));
            var td7 = tr.appendChild(document.createElement('td'));
            var td8 = tr.appendChild(document.createElement('td'));
            td1.innerHTML=name;
            td2.innerHTML=rollNo;
            td3.innerHTML= branch;
            td4.innerHTML=year;
            td5.innerHTML= email;
            td6.innerHTML= website;
            td7.innerHTML= date;
            td8.innerHTML= gender;
            document.getElementById("tbl").appendChild(tr);
            
        }
        