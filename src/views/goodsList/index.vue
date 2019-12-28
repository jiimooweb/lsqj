<template>
	<div>
		<van-list
			v-model="loading"
			:finished="finished"
			:finished-text="finishedText"
			@load="onLoad"
		>
			<div class="goodsPage">
				<div
					class="goodItem"
					v-for="(item, index) in goodsList"
					:key="index"
					@click="returnDetail(item.id)"
				>
					<div class="goodImg">
						<img :src="item.imgs[0].url" />
					</div>
					<div class="goodText">
						<p class="goodText-title">
							<van-tag type="danger" class="goodText-title-tag">{{
								item.type === "discount"
									? "优惠"
									: item.type === "member"
									? "会员"
									: item.type === "group"
									? "团购"
									: "一般"
							}}</van-tag>
							<a class="goodText-title-a">{{ item.name }}</a>
						</p>
						<p class="goodText-price">
							<span class="goodText-price-new">¥{{ item.price }}元</span>
							<span
								class="goodText-price-old"
								v-if="
									item.type === 'discount' ||
										item.type === 'member' ||
										item.type === 'group'
								"
								>20元</span
							>
						</p>
					</div>
				</div>
			</div>
		</van-list>
	</div>
</template>

<script>
import { Tag, List } from "vant";
import axios from "../../public/axios";
export default {
	components: {
		[List.name]: List,
		[Tag.name]: Tag
	},
	data() {
		return {
			finishedText: "没有更多了",
			loading: false,
			finished: true,
			goodsType: "",
			goodsList: []
		};
	},
	methods: {
		onLoad() {
			this.loading = false;
			this.finished = true;
			return;
			// 异步更新数据
			// setTimeout(() => {
			//     for (let i = 0; i < 10; i++) {
			//         this.list.push(this.list.length + 1);
			//     }
			//     // 加载状态结束
			//     this.loading = false;

			//     // 数据全部加载完成
			//     if (this.list.length >= 40) {
			//         this.finished = true;
			//     }
			// }, 500);
		},
		returnDetail(id) {
			// console.log(id);
			this.$router.push({ path: "goods?id=" + id });
		},

		getGoodsList() {
			axios
				.request({
					url: "mall/" + this.$route.query.id,
					method: "get"
				})
				.then(res => {
					console.log(res);
					this.goodsList = res.data.data;
				});
		}
	},
	mounted() {
		console.log(this.$route.query.id);
		this.getGoodsList();
	}
};
</script>

<style lang="less">
.goodsPage {
	position: absolute;
	width: 100%;
	height: 100%;
	background: #efefef;
	.goodItem {
		width: calc(95% - 10px);
		height: 100px;
		background: #fff;
		margin: 10px auto 10px;
		padding: 10px 10px;
		border-radius: 5px;
		.goodImg {
			width: 100px;
			height: 100px;
			float: left;
			overflow: hidden;
			border-radius: 5px;
			img {
				display: block;
				width: 100px;
			}
		}
		.goodText {
			float: right;
			width: calc(100% - 100px - 15px);
			height: 100px;
			&-title {
				margin-top: 5px;
				padding: 0 5px;
				font-size: 15px;
				color: #111;
				text-align: left;
				line-height: 25px;
				height: 50px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				&-tag {
					margin-right: 5px;
				}
				&-a {
					color: #111;
				}
			}
			&-price {
				font-size: 14px;
				margin: 20px 0 0;
				padding: 0 5px;
				&-new {
					font-size: 15px;
					color: #ed4014;
					float: left;
				}
				&-old {
					color: #aaa;
					float: left;
					line-height: 25px;
					margin-left: 5px;
					text-decoration: line-through;
				}
			}
		}
	}
}
</style>
