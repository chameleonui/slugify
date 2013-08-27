/**
 * Generate a slug from the given `str`
 * 
 * @param {String} str
 * @return {String}
 */

module.exports = function(str){
    var map = [
        { "find": "[\\n\\f\\r\\t\\v]", "replaceBy": ""},
        { "find": "[àáâãäåÀÁÂÃÄÅ]", "replaceBy": "a"},
        { "find": "[æÆ]", "replaceBy": "ae" },
        { "find": "[çčćÇČĆ]", "replaceBy": "c" },
        { "find": "[ďĎ]", "replaceBy": "d" },
        { "find": "[éěèêëęėēÉĚÈÊËĘĖĒ]", "replaceBy": "e" },
        { "find": "[íîïìįīÍÎÏÌĮĪ]", "replaceBy": "i" },
        { "find": "[ľĽ]", "replaceBy": "l" },
        { "find": "[ñňńÑŇŃ]", "replaceBy": "n" },
        { "find": "[óöôòõøōÓÖÔÒÕØŌ]", "replaceBy": "o" },
        { "find": "[œŒ]", "replaceBy": "oe" },
        { "find": "[řŘ]", "replaceBy": "r" },
        { "find": "[šßśŠŚ]", "replaceBy": "s" },
        { "find": "[ťŤ]", "replaceBy": "t" },
        { "find": "[úůûüùūÚŮÛÜÙŪ]", "replaceBy": "u" },
        { "find": "[ýÿÝŸ]", "replaceBy": "y" },
        { "find": "[žźżŽŹŻ]", "replaceBy": "z" },
        { "find": "\\s\\s*", "replaceBy": " " },
        { "find": "^\\s", "replaceBy": "" },
        { "find": "\\s$", "replaceBy": "" },
        { "find": "\\s", "replaceBy": "-" },
        { "find": "[^a-z0-9-_]", "replaceBy": "" } // safety net
    ]

    str = str.toLowerCase();
    for (var l = map.length - 1, i = 0; i <= l; i++) {
        str = str.replace(new RegExp(map[i].find, 'g'), map[i].replaceBy);
    };
    
    return str;
};