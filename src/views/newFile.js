export default (await import('vue')).defineComponent({
components: {
pcModules,
pcMenuBar,
pcInfo,
jobEdu,

pcSecurity,
},

data() {
return {
activePage: 1,
};
},

methods: {
togglePage(item) {
this.activePage = item.id;
},
},
});
