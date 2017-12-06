<template>
<div class="view-prod-buy">
  <p class="title">Confirm Your Order Before Submit</p>
  <div class="form">
    <div class="form-item">
      <div class="label">Selected Product</div>
      <div class="prod-name">Bitcoin Cloud Mining Daily Plan</div>
      <div class="price">1.6USD/1TH/s</div>
    </div>
    <div class="form-item">
      <div class="label">Selected Amount</div>
      <el-input-number v-model="amount" :min="1" :max="100"></el-input-number>
    </div>
    <div class="form-item">
      <div class="label">Estimated Rewards</div>
      <div>
        <span class="num">0.023</span>
        <span class="unit">BTC/Day</span>
        <span class="equal">=</span>
        <span class="num">680</span>
        <span class="unit">USD/Day</span>
      </div>
    </div>
    <div class="form-item">
      <div class="label">Contract Date</div>
      <div>
        <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="选择日期"
          format="yyyy-MM-dd">
        </el-date-picker>
        <span class="equal">TO</span>
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="选择日期"
          format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </div>
    <div class="form-item">
      <div class="label">Money to Pay</div>
      <div>
        <span class="num">680</span>
        <span class="unit">USD/Day</span>
      </div>
    </div>
    <section class="submit-wrap">
      <el-button @click="submit">Submit Order</el-button>
    </section>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      amount: 1,
      startDate: null,
      endDate: null
    }
  },
  methods: {
    submit() {
      this.$router.push({ name: 'products_buy_success' })
    }
  }
}
</script>

<style lang="sass" src="styles/views/products/buy.scss"></style>
