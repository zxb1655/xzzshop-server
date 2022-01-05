const Base = require("./base.js");
const moment = require("moment");
module.exports = class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    const page = this.get("page") || 1;
    const name = this.get("name") || 1;
    const size = this.get("size") || 10;
    const model = this.model("comment");
    const data = await model
      .where({
        is_delete: 0,
        goods_id: ["like", `%${name}%`],
      })
      .order(["id ASC"])
      .page(page, size)
      .countSelect();
    for (const item of data.data) {
      if (item.image_url) {
        item.image_url = JSON.parse(item.image_url);
      }
      if (item.enabled == 1) {
        item.enabled = true;
      } else {
        item.enabled = false;
      }
    }
    return this.success(data);
  }
  async updateSortAction() {
    const id = this.post("id");
    const sort = this.post("sort");
    const model = this.model("ad");
    const data = await model
      .where({
        id: id,
      })
      .update({
        sort_order: sort,
      });
    return this.success(data);
  }
  async infoAction() {
    const id = this.get("id");
    const model = this.model("comment");
    const data = await model
      .where({
        id: id,
      })
      .find();
    if (data && data.image_url) {
      data.image_url = JSON.parse(data.image_url);
    }
    return this.success(data);
  }
  async storeAction() {
    if (!this.isPost) {
      return false;
    }
    const values = this.post();
    values.image_url = JSON.stringify(values.image_url);
    console.log(values);
    const id = this.post("id");
    const model = this.model("comment");
    if (id > 0) {
      await model
        .where({
          id: id,
        })
        .update(values);
    } else {
      await model.add(values);
    }
    return this.success(values);
  }
  async getallrelateAction() {
    let data = await this.model("goods")
      .where({
        is_on_sale: 1,
        is_delete: 0,
      })
      .field("id,name,list_pic_url")
      .select();
    return this.success(data);
  }
  async destoryAction() {
    const id = this.post("id");
    await this.model("comment")
      .where({
        id: id,
      })
      .limit(1)
      .update({
        is_delete: 1,
      });
    return this.success();
  }
  async saleStatusAction() {
    const id = this.get("id");
    const status = this.get("status");
    let sale = 0;
    if (status == "true") {
      sale = 1;
    }
    const model = this.model("comment");
    await model
      .where({
        id: id,
      })
      .update({
        enabled: sale,
      });
  }
};
