const researchTable = document.querySelector(".main");

const research = [
  {
    title: "IMAGE PROCESSING TECHNIQUE IN AUTONOMOUS VEHICLES",
    authors:
      "Aditi Bais, Utkarsh Tripathi, Ayush Kr.Tiwari, Pallavi Verma, Pranay Bhadauria, KamalDeep Jangra",
    conferences:
      "The 2nd international Conference on Optimization Techniques in Engineering and Technology(ICOTET- 2024)",
    researchYr: 2024,
    citebox: "popup1",
    image: "960x0.webp",
    citation: {
      vancouver:
        "Aditi Bais, Utkarsh Tripathi, Ayush Kr.Tiwari, Pallavi Verma, Pranay Bhadauria, KamalDeep Jangra. We all worked together on Autonomous vehicles working system.The 2nd international Conference on Optimization Techniques in Engineering and Technology(ICOTET- 2024) ",
    },
    abstract:
      "In recent years, the proliferation of autonomous vehicles (AVs)has sparked considerable interest and research due to their potential to significantly impact society by enhancing passenger safety, reducing fuel consumption, alleviating traffic congestion, and minimizing accidents. However, before their widespread deployment on public roads, addressing functionality errors and ensuring reliability are paramount. This comprehensive survey delves into three crucial domains essential for the development of autonomous driving systems: multi-object tracking, pedestrian detection, and environmental sensing. Multi-object tracking algorithms have undergone significant evolution, driven by the remarkable performance of deep learning in visual object tracking. Furthermore, accurate pedestrian detection is identified as a critical task for autonomous vehicles to prevent accidents. However, it presents challenges such as occlusion, deformation, and low-quality input images. Moreover, environmental sensing plays a pivotal role in autonomous driving, encompassing tasks such as environment detection, path planning, motion control, and vehicle cybersecurity. By synthesizing research findings and discussing future directions, this paper aims to provide a holistic understanding of the advancements and challenges in autonomous driving technology. Through informed discussions on multi-object tracking, pedestrian detection, and environmental sensing, it seeks to contribute to the ongoing efforts towards building safe, reliable, and efficient autonomous transportation systems. ",
    absbox: "absPopup1",
  },

  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);