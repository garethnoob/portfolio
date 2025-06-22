<script>
  let { devExperience } = $props();
</script>

<section class="default-margin work-experience mt-m">
  <ul class="work-experience-list">
    {#each devExperience as experience}
      <li class="work-item">
        <article>
          <h3 class="semi-bold mb-xs">{experience.jobTitle}</h3>  
          <div class="company-and-date">
            <p>{experience.company}</p>
            <p class="dark-grey">
              {experience.startDate.slice(0,7)}
              {#if experience.endDate}
                / {experience.endDate.slice(0,7)}
              {:else}
                - Present
              {/if}
            </p>
          </div>
        </article>
        </li>
    {/each}
  </ul>
  <h2 class="headline">Past work <br />Experience</h2>
</section>


<style>
  .work-experience {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .work-experience-list {
    width: 50%;

  }

  .headline {
    text-align: right;
  }

  .work-item {
    border-bottom: 1px solid lightgrey;
    padding-bottom: 12px;
  }

  .work-item:not(:first-of-type) {
    padding-top: 16px;
  }

  .work-item p {
    margin: 0;
  }

  .company-and-date {
    display: flex;
    justify-content: space-between;
  }
</style>