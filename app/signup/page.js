import React from "react";
import MailingListSec from "../../component/homepage/MailingListSec";

const Signup = () => {
  return (
    <>
      <MailingListSec />
      <section className="container-padding in-container mb-14 grid grid-cols-12 lg:mb-20 lg:gap-10">
        <div className="col-span-12 lg:col-span-7 lg:col-start-2">
          <form noValidate>
            <input type="hidden" name="_csrf" className="focusAttached" />

            <div className="input-wrap mb-8 w-full">
              <label className="group relative w-full" htmlFor="firstName">
                <div className="label-wrap px-2 text-left text-xs text-gray-400 is-required">
                  <p>First name</p>
                </div>
                <input
                  aria-autocomplete="list"
                  autoComplete="one-time-code"
                  className="form-input text-label focus:placeholder:text-boulder mb-0 w-full max-w-full border-x-0 border-b border-t-0 bg-transparent px-2 pb-4 pt-1 text-white placeholder:text-left placeholder:capitalize placeholder:text-white focus:border-white focus:outline-none focus:ring-0 focusAttached"
                  id="firstName"
                  placeholder="First Name"
                  required
                  type="text"
                  name="firstName"
                />
              </label>
            </div>

            <div className="input-wrap mb-8 w-full">
              <label className="group relative w-full" htmlFor="lastName">
                <div className="label-wrap px-2 text-left text-xs text-gray-400 is-required">
                  <p>Last name</p>
                </div>
                <input
                  aria-autocomplete="list"
                  autoComplete="one-time-code"
                  className="form-input text-label focus:placeholder:text-boulder mb-0 w-full max-w-full border-x-0 border-b border-t-0 bg-transparent px-2 pb-4 pt-1 text-white placeholder:text-left placeholder:capitalize placeholder:text-white focus:border-white focus:outline-none focus:ring-0 focusAttached"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  type="text"
                  name="lastName"
                />
              </label>
            </div>

            <div className="input-wrap mb-8 w-full">
              <label className="group relative w-full" htmlFor="dateOfBirth">
                <div className="label-wrap px-2 text-left text-xs text-gray-400 is-required">
                  <p>Date of birth</p>
                </div>
                <input
                  aria-autocomplete="list"
                  autoComplete="one-time-code"
                  className="form-input text-label focus:placeholder:text-boulder mb-0 w-full max-w-full border-x-0 border-b border-t-0 bg-transparent px-2 pb-4 pt-1 text-white placeholder:text-left placeholder:capitalize placeholder:text-white focus:border-white focus:outline-none focus:ring-0 focusAttached"
                  id="dateOfBirth"
                  max="9999-01-01"
                  min="1900-01-01"
                  placeholder="DD/MM/YYYY"
                  required
                  type="date"
                  name="dateOfBirth"
                />
              </label>
            </div>

            <div className="input-wrap mb-8 w-full">
              <label className="group relative w-full" htmlFor="email">
                <div className="label-wrap px-2 text-left text-xs text-gray-400 is-required">
                  <p>Email</p>
                </div>
                <input
                  aria-autocomplete="list"
                  autoComplete="one-time-code"
                  className="form-input text-label focus:placeholder:text-boulder mb-0 w-full max-w-full border-x-0 border-b border-t-0 bg-transparent px-2 pb-4 pt-1 text-white placeholder:text-left placeholder:capitalize placeholder:text-white focus:border-white focus:outline-none focus:ring-0 focusAttached"
                  id="email"
                  placeholder="Email"
                  required
                  type="text"
                  name="email"
                />
              </label>
            </div>

            <div className="input-wrap mb-8 w-full">
              <label
                className="group relative w-full"
                htmlFor="countryOfResidence"
              >
                <div className="label-wrap px-2 text-left text-xs text-gray-400 is-required">
                  <p>
                    Region / Where do you live, Guinness Summer Drops is only
                    open to those
                    <br /> in the Republic of Ireland and Northern Ireland.
                  </p>
                </div>
                <select
                  className="form-select text-label focus:placeholder:text-boulder mb-0 w-full max-w-full border-x-0 border-b border-t-0 bg-transparent px-2 pb-4 pt-1 placeholder:text-left placeholder:capitalize placeholder:text-white focus:border-white focus:outline-none focus:ring-0 focusAttached"
                  id="countryOfResidence"
                  name="countryOfResidence"
                  required
                >
                  <option disabled value="" selected>
                    Choose your region
                  </option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central Africa</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China Mainland</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">Congo, the Democratic Republic</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote d'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and McDonald Islands</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong SAR</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">Korea</option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao SAR</option>
                  <option value="MK">Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestine</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn Islands</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthelemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </label>
            </div>

            <div className="input-wrap-checkbox flex-basis-0 mb-8 w-full">
              <label className="terms" for="TERMS AND MARKETING">
                <input className="form-checkbox border-boulder gold-check checked:border-boulder checked:hover:border-boulder focus:border-boulder mb-0 mr-2 mt-2 h-6 w-6 cursor-pointer self-start bg-transparent checked:bg-transparent checked:hover:bg-transparent focus:bg-transparent focus:ring-0  focusAttached" />
                <div class="false text-label prose pl-2 text-left">
                  <p>
                    Tick here if you would like us to use your email to keep you
                    informed about products, services and events from Guinness
                    &amp; other Diageo brands. We’ll occasionally send you
                    messages and show you ads for things that we think may be of
                    interest.*
                  </p>
                  <p>
                    By signing up, you accept Diageo's{" "}
                    <a
                      data-anchor="?locale=en-row"
                      title="Conditions of Use"
                      href="https://footer.diageohorizon.com/dfs/assets/gcms-guinness.diageoplatform.com/TnC_en.html?locale=en-row"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      Conditions of Use
                    </a>{" "}
                    {""}
                    and acknowledge the{" "}
                    <a
                      data-anchor="?locale=en-row"
                      title="Privacy &amp; Cookie Notice"
                      href="https://footer.diageohorizon.com/dfs/assets/gcms-guinness.diageoplatform.com/PrivacyPolicy_en.html?locale=en-row"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      Privacy &amp; Cookie Notice
                    </a>{" "}
                    {""}. Please see the ‘Disclosure of your personal data’
                    section of our{" "}
                    <a
                      data-anchor="?locale=en-row"
                      title="Privacy &amp; Cookie Notice"
                      href="https://footer.diageohorizon.com/dfs/assets/gcms-guinness.diageoplatform.com/PrivacyPolicy_en.html?locale=en-row"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      Privacy &amp; Cookie Notice
                    </a>{" "}
                    . for further information on how we share your data with our
                    marketing partners. You can unsubscribe at any time.
                  </p>
                </div>
              </label>
            </div>

            <div class="bottom-cnt">
              <div class="ml-auto text-right">
                <button class="btn-gold" id="submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Signup;
