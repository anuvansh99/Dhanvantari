class medicine {
    constructor(
      name,
      reference_text,
      dispencing_pack,
      disease_or_symptom,
      dose,
      Precaution_or_Contraindication,
      preferred_use
    ) {
      this.name = name;
      this.reference_text = reference_text;
      this.dispencing_pack = dispencing_pack;
      this.disease_or_symptom = disease_or_symptom;
      this.dose = dose;
      this.Precaution_or_Contraindication = Precaution_or_Contraindication;
      this.preferred_use = preferred_use;
    }
  }
  
  const medicine1 = new medicine(
    "Ashvagandha Churna",
    "API",
    "50 gm",
    "Kshaya, Daurbalya, Vatroga,Klaivya",
    "3-6 gm",
    "Long term use may increase blood pressure",
    "Both"
  );
  
  const medicine2 = new medicine(
    "Haritaki Churna",
    "API",
    "50gm",
    "Vibandha, Udararoga",
    "3-6gm",
    "Debility,pregnancy, dehydration, Paittika Roga",
    "both"
  );
  const medicine3 = new medicine(
    "Trivrita Churna",
    "API",
    "25gm",
    "Malabandha, Gulma, Udararoga",
    "2-3gm",
    "Dehydration, malnutrition, long term use",
    "both"
  );
  const medicine5 = new medicine(
    "Abhayarishta",
    "AFI",
    "200 ml",
    "Arsha, Agnimandya, Udararoga, Vibandha",
    "12 - 24 ml",
    "NS",
    "Both"
  );
  
  const medicine6 = new medicine(
    "Amritarishta",
    "AFI",
    "200 ml",
    "SarvaJvara, Jirna Jvara",
    "12 - 24 ml",
    "NS",
    "Both"
  );
  
  const medicine7 = new medicine(
    "Aragvadharishta",
    "AH",
    "200 ml",
    "Kandu, Tvak Vikara, Vibandha",
    "12 - 24 ml",
    "NS",
    "Both"
  );
  
  const medicine8 = new medicine(
    "Aravindasava",
    "AFI",
    "200 ml",
    "Balaroga, Balakshaya, Agnimandya, Aruchi",
    "12 - 24 ml",
    "NS",
    "Both"
  );
  const medicine9 = new medicine(
      "Shunthi Churna",
      "API",
      "25 gm",
      "Amavata, Agnimandya Udararoga, Shvasa",
      "2-3 gm",
      "NS",
      "Both"
    );
    
    const medicine10 = new medicine(
      "Sarasvata Churna",
      "BR",
      "25 gm",
      "Medhya, Smriti and Buddhi Vardhaka",
      "1-2 gm",
      "NS",
      "Both"
    );
  
    const medicine11 = new medicine(
      "Sanjivani Vati",
      "AFI",
      "5 gm",
      "Mandagni, Ajirna, Gulma, Visuchika, Sarpadamsha",
      "125 mg",
      "Pitta Prakriti individuals, hyper sensitivity to Bhallataka, patients having history of Raktapittaja Vikara, pregnancy",
      "Both"
    );
    
  var data = [
    medicine1,
    medicine2,
    medicine3,
    medicine5,
    medicine6,
    medicine7,
    medicine8,
    medicine9,
    medicine10,
    medicine11
  ];

  
//   console.log(data[0]);

  let input_bar=document.querySelector(".input-bar");

  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputData = input_bar.value;
    console.log(inputData);
    // clearUI();
    displayUI(inputData);
  });
  let medicine_name=document.querySelector(".medicine-name");
  let reference_text=document.querySelector(".reference_text");
  let dispencing_pack=document.querySelector(".dispencing_pack");
  let disease_or_symptom=document.querySelector(".disease_or_symptom");
  let dose=document.querySelector(".dose");
  let Precaution_or_Contraindication=document.querySelector(".Precaution_or_Contraindication");
  let preferred_use=document.querySelector(".preferred_use");
  let link = document.querySelector(".link");
  let props=document.querySelector(".props");
  function displayUI(med){
    const foundObject = data.find((obj) => obj.name === med);
    console.log(foundObject);
    // props.classList.add(rand);
    if(foundObject)
    {
        link.href="https://dravyagunatvpm.files.wordpress.com/2009/02/api-2-monographs2.pdf";
        medicine_name.innerText=`${foundObject.name}`;
        reference_text.innerText=`Reference Text = ${foundObject.reference_text}`;
        dispencing_pack.innerText=`Dispencing Pack = ${foundObject.dispencing_pack}`;
        disease_or_symptom.innerText=`Disease or Symptoms =${foundObject.disease_or_symptom}`;
        dose.innerText=`Dose = ${foundObject.dose}`;
        Precaution_or_Contraindication.innerText=`Precaution or Contraindication = ${foundObject.Precaution_or_Contraindication}`;
        preferred_usef.innerText=`Preferred Use = ${foundObject.preferred_use}`;
    }
    else{
        medicine_name.innerText="Erorr 404 Not Found";
    }
  }