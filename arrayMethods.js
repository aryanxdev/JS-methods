const dogs = [
    {
      id: 'dog-1',
      name: 'Poodle',
      temperament: [
        'Intelligent',
        'Active',
        'Alert',
        'Faithful',
        'Trainable',
        'Instinctual',
      ],
    },
    {
      id: 'dog-2',
      name: 'Bernese Mountain Dog',
      temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    },
    {
      id: 'dog-3',
      name: 'Labrador Retriever',
      temperament: [
        'Intelligent',
        'Even Tempered',
        'Kind',
        'Agile',
        'Outgoing',
        'Trusting',
        'Gentle',
      ],
    },
  ];
  dogs.age=99999;
  
  console.log(dogs.find(dog => dog.name === 'Bernese Mountain Dog'))
  // {id: 'dog-2', name: 'Bernese Mountain Dog', ...etc}

  console.log(dogs.findIndex(dog => dog.name === 'Bernese Mountain Dog'))
  // 1 cause the dog named bernese is at the index 1 in the dogs array
  
  console.log(dogs.some(dog => dog.temperament.includes('Aggressive')))
  // false
  
  console.log(dogs.some(dog => dog.temperament.includes('Trusting')))
  // true
  
  console.log(dogs.every(dog => dog.temperament.includes('Trusting')))
  // false
  
  console.log(dogs.every(dog => dog.temperament.includes('Intelligent')))
  // true
  
  console.log(dogs.map(dog => dog.name))
  // ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']
  
  console.log(dogs.filter(dog => dog.temperament.includes('Faithful')))
  // [{id: 'dog-1', ..etc}, {id: 'dog-2', ...etc}]
  
  console.log(dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament]
  }, []))
  // [ 'Intelligent', 'Active', 'Alert', ...etc ]

  let foo=num=>num>60;
  let a=[1,3,4,65,45,34,64,0];
  console.log(a.findIndex(foo));

  dogs.forEach((dog)=>{
    console.log(dog.id);
  });

  for(i=0;i<dogs.length;i++)
  {
    console.log(dogs[i])
  }

  let ar=new Array(1,2,3,4,5);
  console.log(ar,ar.length);
  ar[10]=9090;
  console.log(ar,ar.length);



  //aryan
  let str='sagar';
  let newstr=''
  for(let i=0;i<str.length;i++)
  {
    newstr+=str[i];
    if(str[i]==='a')
    {
      str+='V';
      break;
    }
  }
  for(let j=newstr.length-1;j<str.length;j++)
  {
    newstr+=str[j];
  }
  console.log(newstr);