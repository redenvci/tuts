import Hero from "@/components/hero";
import Profile from "@/components/profile";


async function getAbout() {
  const res = await fetch("https://staging-backend.ci-future-caprover.careindeed.com/api/homepage?populate=deep");
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function About() {
  const aboutData = await getAbout();
  return (
    <div>
      <Hero header="I AM Number 1" subHeader="subheading example text" />
      {
        aboutData.data.attributes.components.map((component: any, index: number) => {
          const imageUrl = 'https://staging-backend.ci-future-caprover.careindeed.com' + component.image.data.attributes.url;
          return (
            <Profile
              key={index}
              name={component.heading}
              position={aboutData.data.attributes.metadescription}
              about={aboutData.data.attributes.metadescription}
              image={imageUrl}
              pictureLeft={false}
              motto={""}
              mottoContent={""}
            />
          );
        })
      }
    </div>
  );
}