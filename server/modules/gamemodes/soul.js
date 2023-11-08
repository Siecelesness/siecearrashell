class soul {
    constructor() {
module.exports = ({ Events }) => {
    Events.on('spawn', entity => {
        if (entity.master == entity) {
            entity.on('dead', () => {
                let newBoi = new Entity(entity);
                newBoi.define('wisp');
                newBoi.team = entity.team;
            });
        }
    });
};
}
}

module.exports = { soul };