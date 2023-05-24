<script lang="ts">
	let  location1, location2, fileInput, files, clear;
	
    function getBase64(image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            location1 = e.target.result;
    };
};

    function getBase(image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            location2 = e.target.result;
    };
};
	
</script>
<div class ="container">
	<h1>Upload Image 1</h1>

    {#if location1}
        <img id="location1" src="{location1}" alt="" />
        {:else}
        <img id="location1" src="../../static/kinsale.jpg" alt="" /> 
        {/if}
        <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>
        <button class="upload-btn" on:click={ () => fileInput.click() }>Upload</button>
        <button	on:click={() => fileInput.value = ''}>
            Delete
        </button>
        
</div>
<div class ="container">
	<h1>Upload Image 2</h1>

    {#if location}
        <img id="location2" src="{location2}" alt="" />
        {:else}
        <img id="location2" src="../../static/moher.jpg" alt="" /> 
        {/if}
        <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase(files[0])}/>
        <button class="upload-btn" on:click={ () => fileInput.click() }>Upload</button>
        <button	class="delete-btn" on:click={ () => fileInput.remove}>
            Delete
        </button>
</div>