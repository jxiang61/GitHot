export default class Utils {

    static checkFavorite(item, keys = []) {
        if (!keys) {
            return false;
        }
        for (let i = 0, len = keys.length; i < len; i++) {
            let id = item.id ? item.id : item.fullName;
            if (id.toString() === keys[i]) {
                return true;
            }
        }
        return false;
    }

    static checkKeyIsExist(keys, key) {
        for (let i = 0, l = keys.length; i < l; i++) {
            if (key.toLowerCase() === keys[i].name.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
}
