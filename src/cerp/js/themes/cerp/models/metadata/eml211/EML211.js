let irText = MetacatUI.appModel.get("defaultIntellectualRights");
irText = irText || "This dataset is made available to the public in response to the Florida Public Records Law, Florida Statutes, Chapter 119. This data is a conceptual tool utilized for project development and implementation only. This data is not self-executing or binding, and does not otherwise affect the interests of any person including any vested rights or existing uses of real property. Any information, including but not limited to maps and data, received from CERP is provided \"as is\" without any warranty and CERP expressly disclaims all express and implied warranties of merchantability and fitness for a particular purpose. CERP does not make any representations regarding the use, or the results of the use, of the information provided to you by CERP."

define(["models/BaseEML"],
    function(BaseEML) {
        "use strict";

 
        return BaseEML.extend({
            defaults: function(){
                return Object.assign(BaseEML.prototype.defaults(), {
                    intellectualRights: irText
                });
            }
        });
});