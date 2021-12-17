import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Test() {
	const tilt = 25;
	const maxGlowBrightness = 0.3;
	const width = 321;
	const height = 492;

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateY = useTransform(mouseX, [0, width], [-tilt, tilt]);
	const rotateX = useTransform(mouseY, [0, height], [tilt, -tilt]);

	const glowX = useTransform(mouseX, [0, width], [width, 0]);
	const glowBrightness = useTransform(rotateX, [-tilt, tilt], [maxGlowBrightness, 0]);

	const cardBrightness = useTransform(rotateX, [-tilt, tilt], [0, 0.5]);

	const [isHovered, setIsHovered] = useState(false);

	const onMouseMove: React.MouseEventHandler<HTMLImageElement> = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		mouseX.set(Math.floor(e.clientX - rect.x));
		mouseY.set(Math.floor(e.clientY - rect.y));
	};

	return (
		<div className='h-screen flex items-center justify-center bg-white'>
			<motion.div
				className='relative'
				// whileHover={{ scale: 1.1 }}
				onMouseMove={onMouseMove}
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				style={{
					// rotateX: isHovered ? rotateX : 0,
					// rotateY: isHovered ? rotateY : 0,
					rotateX,
					rotateY,
					transformPerspective: 500,
				}}
			>
				<img src='/cards/card_001.png' className='block rounded-lg' />
				{/* <motion.div
					className='w-full h-full absolute inset-0 bg-black rounded-lg'
					style={{ opacity: cardBrightness }}
				></motion.div>
				<div className='w-full h-full absolute inset-0 pointer-events-none'>
					<motion.div
						style={{
							x: glowX,
							y: 0,
							opacity: isHovered ? glowBrightness : 0,
							boxShadow: '#fff 0px 0px 200px 200px',
							width: 0,
							height: 0,
						}}
					/>
				</div> */}
			</motion.div>
		</div>
	);
}
