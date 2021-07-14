<script>
import ParkService from '../service/ParkService';

export default {
    name: 'CrudVue',
    data() {
        return {
            parks: null
        }
    },
    parkService : null,
    created() {
        this.parkService = new ParkService();
    },
    mounted() {
        this.parkService.getAll().then(data => {
            this.parks = data.data;
        })
    }
}
</script>

<style scoped>

</style>