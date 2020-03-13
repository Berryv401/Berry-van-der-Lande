let url = 'https://docs.google.com/spreadsheets/d/1nrV1lkS1x4sJcfbct3HIzi4HnLyEZ-TIv3BmczAbMe0/edit#gid=0'
let id = '1nrV1lkS1x4sJcfbct3HIzi4HnLyEZ-TIv3BmczAbMe0'
let source = `https://spreadsheets.google.com/feeds/list/1nrV1lkS1x4sJcfbct3HIzi4HnLyEZ-TIv3BmczAbMe0/od6/public/values?alt=json`

fetch(source)   
.then( response => response.json() )   
.then( data =>  {       
	console.log('data', data)            
	let projects = data.feed.entry.map( project => {                  
		return {           
			title: project.gsx$title.$t,           
			image: project.gsx$image.$t,           
			description: project.gsx$description.$t,           
			url: project.gsx$url.$t         
		}       
	})       
	app(projects)   })    
.catch( err => console.log('err', err))  
function app(projects) {   console.log('app - projects', projects) 
 function projectData(){     
	for(let i =0; i < projects.length; i++){         
		let $article = $(`         
			<article>            
				<a class="project-titles" href="#">${projects[i].title}</a>         
					<div class="project_image">         
						<a href=${projects[i].url}>              
							<img class='links' width= "100%" height="100%" src=${projects[i].image}></a>         
					</div>         
					<div class= buttons>         
						       
					</div>         
				</article>`)          
		$('.projectContainer').append($article)     
	}   
}   
projectData()  } 

