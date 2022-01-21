//a63391273e334823b2a8d651fd2563b2
newsAccordian=document.getElementById("newsAccordian")

let source="bbc-news";
let apiKey="a63391273e334823b2a8d651fd2563b2";
const xhr = new XMLHttpRequest();

   // Open the object
   // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

   // USE THIS FOR POST REQUEST
   xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=9efba03ea1bb488eac177d668753f2fa', true);
   //xhr.getResponseHeader('Content-type', 'application/json');


   xhr.onload = function () {
       if(this.status === 200){
          let json=JSON.parse(this.responseText);
          let articles=json.articles;
          console.log(articles);
          let newsHTML="";
          articles.forEach(function(element,index){

            //console.log(articles[news]);
            let news=`
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                 <b>Breaking News${index+1}:</b> ${element["title"]}
                </button>
              </h2>
              <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
                <div class="accordion-body">
                 ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a>
                </div>
              </div>
            </div>
            </div>`
            newsHTML+=news;
          });
        newsAccordian.innerHTML=newsHTML;
       }
       else{
           console.log("Some error occured")
       }
   }


   xhr.send();
