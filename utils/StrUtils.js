module.exports = {
    onlyUnique: function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
}
