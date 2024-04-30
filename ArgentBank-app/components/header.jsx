import React from "react";
import styled from "styled-components";



function Banner({ backgroundImage, title }) {
    return (
        
        <BannerImg backgroundImage={backgroundImage}>
            <BannerTitle>{title}</BannerTitle>
            </BannerImg>
            
    )
}

export default Banner