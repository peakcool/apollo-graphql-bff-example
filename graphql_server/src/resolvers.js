module.exports = {
    Query: {
        user(_, __, { dataSources }) {
            return dataSources.userAPI.getUser();
        },
        users(_, __, { dataSources }) {
            return dataSources.userAPI.getAllUser();
        },
        findUser(_, args, { dataSources }) {
            return dataSources.userAPI.findUser(args.id);
        }
    }
}