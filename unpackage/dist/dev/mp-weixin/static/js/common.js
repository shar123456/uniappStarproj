const serverUrl="https://www.imovietrailer.com/superhero";
	const RecommendationArray = [{
					id: 1,
					name: "光学显微镜",
					cover: "http://ku.90sjimg.com/element_origin_min_pic/16/10/27/86038b0052621c01d0efdf19aed1a117.jpg",
					score: "9.1",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:7855.38,
					type:"Recommendation",
					createDate:"2020-01-15",
					category:"jx"
				},
				{
					id: 2,
					name: "Bresser 透光显微镜",
					cover: "http://img63.chem17.com/9/20140728/635421449392132785993.jpg",
					score: "3.1",
					type:"Recommendation",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:7855.38,
						createDate:"2020-01-15",
						
						category:"jx"
				},
				{
					id: 3,
					name: "透射光显微镜",
					cover: "http://ku.90sjimg.com/element_origin_min_pic/18/07/26/1ccfac59da49ef573936fca239e2b16d.jpg",
					score: "6.1",
					type:"Recommendation",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:7855.38,
						createDate:"2020-01-15",
						
						category:"jx"
				},
				{
					id: 4,
					name: "电子显微镜",
					cover: "http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141119151503137397.jpg",
					score: "1.1",
					type:"Recommendation",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:7855.38,
						createDate:"2020-01-15",
						
						category:"sy"
				},
				{
					id: 5,
					name: "Junior 显微镜",
					cover: "http://www.shangguang.com/upfile/2016/05/20160520032319_876.jpg",
					score: "7.1",
					type:"Recommendation",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:7855.38,
						createDate:"2020-01-15",
						
						category:"sy"
				}
				,
				{
					id: 6,
					name: "电子显微镜",
					cover: "http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141117144519625852.jpg",
					score: "8.1",
					type:"Recommendation",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:7855.38,
						createDate:"2020-01-15",
						
						category:"sy"
				},
				{
					id: 10,
					name: "P90-UI54 光学显微镜",
					cover: "http://img2.app17.com/products/big/20120207/201202071114177060.jpg",
					score: "8.1",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:2231.5,
						createDate:"2020-01-15",
						
						category:"sy"
				},
				{
					id:11,
					name: "X89-W3C10 电子显微镜",
					cover: "http://img42.chem17.com/2/2008/2006121914516539.gif",
					score: "4.1",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:1856.98,
						createDate:"2020-01-15",
						
						category:"sy"
				},
				{
					id: 12,
					name: "F7965-W3C14 电子显微镜",
					cover: "http://img3.app17.com/products/big/20130604/201306040516561561.jpg",
					score: "7",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:4852.11,
						createDate:"2020-01-15",
						
						category:"kx"
				},
				
				
				{
					id: 13,
					name: "X88-W4C17 电子显微镜",
					cover: "http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141119151503137397.jpg",
					score: "9.5",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:12821,
						createDate:"2020-01-15",
						
						category:"kx"
				},
				{
					id: 14,
					name: "X00-W3C167 科研显微镜",
					cover: "http://img2.app17.com/products/big/20120503/201205030930595576.jpg",
					score: "9.5",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:7843.98,
						createDate:"2020-01-15",
						
						category:"yl"
				},
				{
					id: 15,
					name: "K50-WH98 电子显微镜",
					cover: "http://www.morcato.com/ProductImages/b/37097.jpg",
					score: "9.5",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:43855,
						createDate:"2020-01-15",
						
						category:"yl"
				},
				{
					id: 16,
					name: "X31-W3C10 电子显微镜",
					cover: "http://pic.baike.soso.com/p/20101026/bki-20101026155338-406515898.jpg",
					score: "6.5",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:2900,
						createDate:"2020-01-15",
						
						category:"yl"
				},
				{
					id: 17,
					name: "X81-WER21 电子显微镜",
					cover: "http://img3.app17.com/products/big/20130604/201306040516561561.jpg",
					score: "7.5",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:6851,
						createDate:"2020-01-15",
						
						category:"yl"
				},
				{
					id: 18,
					name: "SY1998 实验显微镜",
					cover: "http://www.dginfo.com/UpFile/shop/2015/3/17/201531715340699738.jpg",
					score: "6.2",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:19833,
						createDate:"2020-01-15",
						
						category:"gj"
				},
				{
					id: 19,
					name: "FF98-EN5 光学显微镜",
					cover: "http://www.shdygx.com/datacache/pic/324_324_987146b7125fbb459affeaf4f918ae97.jpg",
					score: "9.5",
					type:"Factory",
					desc:"适用于科学研究，实验等，在精确度等方面有很好的效果...",
					price:9387,
						createDate:"2020-01-15",
						
						category:"zn"
				},
			];
			
	let desc=` STEM套件，带金属机身显微镜，塑料载片，LED灯和携带盒（M30-ABS-KT2-W），白色。
			单目可视头带 LED 和镜面照明和内置彩色过滤轮。视野:宽场,阶段:单层带夹子
			朝前旋转炮塔提供 120x、240x、300x、480x、600x 和 1200x 放大倍率
			同轴粗焦对焦在耐用耐脏的白色金属框架上具架和小齿轮对焦机制。
			配有 52 件配件套件和硬质塑料 ABS 外壳。包含组件:显微镜套件。
			由境外网站所在的原销售地的品牌商提供售后保修，可能不覆盖中国，详询品牌商售后。
			购买海外购商品需要提供身份证信息用于清关（清关时间延长有可能影响部分订单的实际送达日期）。
			商品的尺码/适龄/标签和说明书的语言等可能与本地不同。`
			
			let addressList=[{
				id:1,name:"李丽丽",phone:"15985862969",isDefault:false,
				addressH:"福建省 厦门市 集美区 集美大道"
			},
			{
				id:2,name:"张勇",phone:"15622346969",isDefault:true,
					addressH:"福建省 厦门市 湖里区 翔安火炬园"
			},{
				id:3,name:"马芸",phone:"15933652928",isDefault:false,
					addressH:"福建省 厦门市 思明区 开禾路口"
			},{
				id:4,name:"王菲",phone:"13551006989",isDefault:false,
					addressH:"福建省 厦门市 集美区 杏林街道"
			}]
export default {serverUrl,RecommendationArray,desc,addressList};