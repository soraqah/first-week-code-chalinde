// first question of week one assiments: student grade.
function studentGrade(grade) {
    if (grade >=79){
        return "A";
    }
    else if(grade >=60 && grade <=79){
        return "B";
    }
    else if(grade >=49 && grade <=59){
        return "C";
    }
    else if(grade >=40 && grade <=49){
        return "C";
    }
    else if(grade <40){
        return "E";

    }
    
}
console.log(studentGrade(30));



//second question for salaries
let demerit = 0;
let speed = prompt(`how fast was yoyr car going `,0);
document.write(`you ware moving to ${speed} km/h`);

    if (speed < 70){
        document.write("ok");
    }else if(speed >=75 && speed <=70){
         document.write(`be cautious, you are almost above the speed of 75km/h"`);
        
    }
    else if (speed >=75){
        for(; speed >= 75; speed -=5){
            demerit +=1;
        }
            document.write(` you will be deducted ${demerit} points`);
    if (demerit >= 12){ document.write(`License suspended`);}  
     }

     
     
     



