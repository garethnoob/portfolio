<script>
  import SectionHeadline from "./SectionHeadline.svelte";
  import image from '$assets/about-me.jpeg';
  import Button from "./Button.svelte";
  import ExperienceTable from "./ExperienceTable.svelte";

  let { devExperience } = $props();

  function onclick() {
    goto('/#contact-form');
  }
  </script>

<section class="about-me mt-l">
  <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img src={image} alt="about me" class="image" />
    <div class="text">
      <p>Ga is a forward-thinking supply planning manager with a sharp eye for inefficiency and a not-so-secret superpower: laziness-as-a-strategy 🦥. With a self-taught command of Python and VBA, he turns repetitive tasks into slick automation scripts that practically run the business 💻⚙️. He manages capacity planning across three FMCG sites—Cake, Artisan Bread, and Gluten-Free Bread—and thrives on solving complex problems using smart tech, stats, and a fair amount of caffeine ☕📊.</p>

    <p>When he's not deciphering forecast variability or fixing someone else's spreadsheet chaos 🧠📈, he's visualising despair in minimalist infographics or crafting Kafkaesque tweets about the madness of supply chains 🧾📉. Workvivo posts, escalation protocols, and WAPE calculations are all part of a day’s work.</p>

    <p>Outside the manufacturing matrix, Ga is on a mission to reclaim fitness 💪. He’s weight training, doing Couch to 5K, and dodging junk food like it's a product recall 🚫🍩. Structured push-pull splits and progressive overload are the new supply chain KPIs—only this time, the warehouse is his body.</p>

      <p>Part philosopher, part satirist, and occasionally a fictional brand strategist for existential baked goods 🥐💭, Ga operates with an engineer’s brain and a meme lord’s soul 👨‍💻😈. Whether he's building a SvelteKit dashboard, designing logos for imaginary Twitter personas, or investigating a circular reference at 3:47AM like Sherlock Holmes🔍🕵️‍♂️, one thing’s certain: if there’s a smarter, faster way to do something, he’s probably already halfway through scripting it.</p>

      <Button className="mt-m" {onclick}>Tell me about your project</Button>
    </div>
  </div>
  <ExperienceTable {devExperience} />
</section>


<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 40%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }


</style>

