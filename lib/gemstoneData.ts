export type Gemstone = {
	id: number
	name: string
	type: string
	color: string
	size: string
	image: string
	description: string
}

export const gemstones: Gemstone[] = [
	{
		id: 1,
		name: "Colombian Emerald",
		type: "Emerald",
		color: "Green",
		size: "2.5 carats",
		image: "/gemImages/Emerald/561ba03d5357a6c337475aa36e70c849.jpg",
		description:
			"Exquisite emerald with vibrant green hue and exceptional clarity.",
	},
	{
		id: 2,
		name: "Burmese Ruby",
		type: "Ruby",
		color: "Red",
		size: "1.8 carats",
		image: "/gemImages/Ruby/d692f610ecbf8d06fdbf3bef214487c4.jpg",
		description:
			"Stunning Burmese ruby with deep 'pigeon's blood' color.",
	},
	{
		id: 3,
		name: "Ceylon Sapphire",
		type: "Sapphire",
		color: "Blue",
		size: "3.2 carats",
		image: "/gemImages/Sapphire/8dd77d30d655f3e86c77e872ecfee432.jpg",
		description:
			"Magnificent sapphire showcasing a rich ocean-blue hue.",
	},
	{
		id: 4,
		name: "Paraiba Tourmaline",
		type: "Tourmaline",
		color: "Neon Blue",
		size: "1.5 carats",
		image: "/gemImages/Tourmaline/4e7bde4743e896b2b2a2b890acccd5be.jpg",
		description:
			"Rare Tourmaline with sought-after electric neon-blue color.",
	},
	{
		id: 5,
		name: "Opal Cabochon",
		type: "Opal",
		color: "Multi",
		size: "3.0 carats",
		image: "/gemImages/Opal/90d3744a4f694cd509d44d7f5fafa15e.jpg",
		description:
			"Opal with striking play-of-color and unique patterning.",
	},
	{
		id: 6,
		name: "Gold Nugget",
		type: "Gold",
		color: "Yellow",
		size: "20 grams",
		image: "/gemImages/Gold/gold.jpg",
		description:
			"Natural gold nugget prized for its purity and luster.",
	},
	{
		id: 7,
		name: "Silver Crystal",
		type: "Silver",
		color: "Silver",
		size: "15 grams",
		image: "/gemImages/silver/1c285766680db0f17b3a02069769dc8e (1).jpg",
		description:
			"Metallic silver specimen with bright reflective surfaces.",
	},
	{
		id: 8,
		name: "Granite Sample",
		type: "Granite",
		color: "Grey",
		size: "5 cm",
		image: "/gemImages/Granite/d3b2c6d87accc13c0cca7627b34d5d0c.jpg",
		description:
			"Polished granite sample showing classic speckled texture.",
	},
	{
		id: 9,
		name: "Iron Ore",
		type: "Iron",
		color: "Dark Grey",
		size: "500 grams",
		image: "/gemImages/Iron/Nitrogen in the metal industry.jpg",
		description:
			"Iron-bearing specimen commonly used in metallurgical processes.",
	},
	{
		id: 10,
		name: "Copper Ore",
		type: "Copper",
		color: "Copper",
		size: "300 grams",
		image: "/gemImages/copper/cbc5c27a3be9771a19af916c252f9d0d.jpg",
		description:
			"Copper-rich ore with characteristic reddish metallic sheen.",
	},
	{
		id: 11,
		name: "Coal Sample",
		type: "Coal",
		color: "Black",
		size: "500 grams",
		image: "/gemImages/Coal/b3a5274b819b860356ab21ca7cd9c532.jpg",
		description:
			"Dense coal specimen commonly used as an energy source.",
	},
	{
		id: 12,
		name: "Basalt Rock",
		type: "Basalt",
		color: "Dark Grey",
		size: "10 cm",
		image: "/gemImages/Basalt/2c1e48e78f3d614bea9f1cd67240446d.jpg",
		description:
			"Volcanic basalt rock with fine-grained texture.",
	},
	{
		id: 13,
		name: "Tantalum Crystal",
		type: "Tantalum",
		color: "Grey",
		size: "50 grams",
		image: "/gemImages/Tantalum/e2ff98f4eda9de0929f7b5b7c60a6aee.jpg",
		description:
			"Dense tantalum specimen valued for its corrosion resistance.",
	},
	{
		id: 14,
		name: "Danakil Potash",
		type: "Potash",
		color: "Pink",
		size: "Bulk sample",
		image: "/gemImages/Potash/7e420e4f0f791136781947cd9a447457.jpg",
		description:
			"High-grade potash from the Danakil Depression, ideal for fertilizer production and among the world’s largest reserves.",
	},
	{
		id: 15,
		name: "Afar Phosphate",
		type: "Phosphate",
		color: "Buff",
		size: "Bulk sample",
		image: "/gemImages/Phosphate/2b49cca9721f1a49663a3ecd9d399fc8.jpg",
		description:
			"Phosphate-rich rock supporting fertilizer feedstocks from Ethiopia’s emerging Afar deposits.",
	},
	{
		id: 16,
		name: "Lithium Pegmatite",
		type: "Lithium",
		color: "Pale Gray",
		size: "Core slice",
		image: "/gemImages/Lithium/33f517fc0c999a2c2638c3089b148f0b.jpg",
		description:
			"Lithium-bearing pegmatite sample highlighting Ethiopia’s early-stage battery metal potential in the south.",
	},
	{
		id: 17,
		name: "Welo Gypsum",
		type: "Gypsum",
		color: "White",
		size: "Panel sample",
		image: "/gemImages/gypsum/3394c8603e6f8decbfd7b26f290278a8.jpg",
		description:
			"Clean gypsum suitable for cement and wallboard, reflecting Ethiopia’s abundant industrial mineral base.",
	},
	{
		id: 18,
		name: "Limestone Block",
		type: "Limestone",
		color: "Cream",
		size: "Quarry block",
		image: "/gemImages/limestones/747cd903286863e9363e2f2d71343110.jpg",
		description:
			"Dense limestone supporting construction and cement production across Ethiopia’s infrastructure projects.",
	},
	{
		id: 19,
		name: "Frontier Oil Sand",
		type: "Oil",
		color: "Dark Brown",
		size: "Reservoir sample",
		image: "/gemImages/Oil/461ffafbe015db322acfa48471c2ffba.jpg",
		description:
			"Oil-bearing sand illustrating Ethiopia’s underexplored hydrocarbon potential alongside coal resources.",
	},
]

