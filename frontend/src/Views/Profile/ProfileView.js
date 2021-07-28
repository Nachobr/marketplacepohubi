import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileViewStyles.css';

import { ethers } from 'ethers';

import _products from './fixtures/product.demo.json';
import _reviews from './fixtures/review.demo.json';
import demoPicts from './fixtures/profile.pictures';

import starEmptyIcon from '../../media/star-empty.svg';
import starFullIcon from '../../media/star-full.svg';
import backIcon from '../../media/play.svg';

const DECIMAL_BALANCE_CONST = 1000000000000000000;

export default function ProfileView() {
    const _Provider = new ethers.providers.Web3Provider(window.ethereum);
    const _Signer = _Provider.getSigner();
    const [walletAddress, setWalletAddress] = useState('');
    const [walletBalance, setWalletBalance] = useState('');
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchWalletAddress () {
            const address = await _Signer.getAddress();
            setWalletAddress(address.substring(0, 7));
        }
        async function fetchWalletBalance () {
            const balance = await _Signer.getBalance();
            const balanceAmount = (parseFloat(balance.toString())) / DECIMAL_BALANCE_CONST;
            setWalletBalance(balanceAmount);
        }
        fetchWalletAddress();
        fetchWalletBalance();
        setProducts(_products);
        setReviews(_reviews);
    }, []);

    return (
        <div className="profile-view">
            <div className="profile-header">
                <div className="profile-overview">
                    <div className="profile-photo">
                        <img src={demoPicts['a3'].default} alt='Profile' />
                    </div>
                    <div className="profile-name">
                        <div className="profile-fullname">David Rivero</div>
                        <div className="profile-bio">Short bio</div>
                    </div>
                </div>
                <div className="profile-wallet">
                    <div className="profile-wallet-address">{ walletAddress }</div>
                    <div className="profile-bio">{ walletBalance } ETH</div>
                </div>
            </div>
            <div className="profile-body">
                <div className="profile-product-list">
                    <h3>Products</h3>
                    <div className="profile-product-container">
                        {
                            products.slice(0, 3).map((product) => {
                                return <div className="profile-product-item" key={`product-${product.productId}`}>
                                    <div className="profile-product-pict">
                                        <img src={product.img} alt={product.productId} />
                                    </div>
                                    <div className="profile-product-name">{product.name}</div>
                                    <div className="profile-product-price">{product.price}{product.currency}</div>
                                </div>;
                            })
                        }
                        <div className="profile-product-actions">
                            <a href="#">See all products</a>
                            <a href="#">Create new product</a>
                        </div>
                    </div>
                </div>
                <div className="profile-review-list">
                    <h3>Reviews</h3>
                    <div className="profile-review-container">
                        {
                            reviews.map((review) => {
                                let stars = new Array(5);
                                const profileImgSrc = demoPicts[review.img].default;
                                stars = [...stars].map((_, index) => {
                                    if (index + 1 <= review.stars) {
                                        return true;
                                    }
                                    return false;
                                });

                                return <div className="profile-review-item" key={`review-${review.reviewId}`}>
                                    <div className="profile-review-pict">
                                        <img src={profileImgSrc} alt={review.img} />
                                    </div>
                                    <div className="profile-review-name">{review.user}</div>
                                    <div className="profile-review-stars">
                                        {
                                            stars.map((star, index) => {
                                                if (star) {
                                                    return <img key={`star-${index}`} src={starFullIcon} alt='Star' />;
                                                }
                                                return <img key={`star-${index}`} src={starEmptyIcon} alt='Empty star' />;
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                        <div className="profile-review-actions">
                            <a href="#">See all reviews</a>
                        </div>
                    </div>
                </div>
                <div className="profile-back-action">
                    <Link to={'/'}>
                        <img src={backIcon} alt="Back" />
                        <span>Back</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}