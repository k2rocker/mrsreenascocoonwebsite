import React from 'react';
import Footernew from './Footernew';
import Icon from './icons';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export function FooterContainer() {
    return (
        <Footernew>
            <Footernew.Wrapper>
                <Footernew.Row>
                    <Footernew.Column>
                        <Footernew.Title>Mrs Reena's Cocoon</Footernew.Title>
                        <Footernew.Text>
                            
                        </Footernew.Text>
                        <Footernew.Socials>
                            <Footernew.Link href="#"><FaFacebookF /></Footernew.Link>
                            <Footernew.Link href="#"><FaInstagram /></Footernew.Link>
                            <Footernew.Link href="https://www.youtube.com/@mrsreenascocoon9839"><FaYoutube /></Footernew.Link>
                            <Footernew.Link href="#"><FaWhatsapp /></Footernew.Link>
                        </Footernew.Socials>
                    </Footernew.Column>
                    <Footernew.Column>
                        <Footernew.Title>Contact Us</Footernew.Title>
                        <Footernew.Link href="#"><FaPhoneAlt /> +91 984 0733 736</Footernew.Link>
                        <Footernew.Link href="#"><FaPhoneAlt /> +91 735 8755 050</Footernew.Link>
                        <Footernew.Link href="mailto:mrsreenascocoon@gmail.com"><FaEnvelope /> mrsreenascocoon@gmail.com</Footernew.Link>
                        <Footernew.Link href="#"><FaMapMarkerAlt /> Ramapuram | Moulivakkam</Footernew.Link>
                    </Footernew.Column>
                    <Footernew.Column>
                        <Footernew.Title>Quick Links</Footernew.Title>
                        <Footernew.Link href="#">Why choose us?</Footernew.Link>
                        <Footernew.Link href="#">What do we offer?</Footernew.Link>
                        <Footernew.Link href="#">Our Pride</Footernew.Link>
                        <Footernew.Link href="#">Admission</Footernew.Link>
                    </Footernew.Column>
                </Footernew.Row>
            </Footernew.Wrapper>
        </Footernew>
    );
}
