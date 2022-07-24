<script lang="ts">
  import axios from "axios";

  let val: string;

  axios
    .get("http://localhost:3000/api/test")
    .then((response) => {
      val = response.data;
    })
    .catch((error) => {
      val = "error";
    });
</script>

<div>
  API said:
  <br />
  <pre>{val}</pre>
</div>

<style lang="scss">
  div {
    font-size: 1rem;
    pre {
      padding: 0;
      margin: 0;
    }
  }
</style>
