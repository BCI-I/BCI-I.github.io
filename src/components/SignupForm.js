import React from 'react';

class SignupForm extends React.Component {
    render() {
      return ( 
          <div>
      <p className="signup-text">
            <b>Sign up</b> to our <b
              style={{fontFamily: 'Cormorant Infant'}}
              // style={{marginRight: spacing + 'em'}}
              >newsletter</b>&nbsp;
            to stay up to date
      </p>
  
          <div id="mc_embed_shell">
            <div className="narrow-50" id="mc_embed_signup">
              <form
                action="https://github.us21.list-manage.com/subscribe/post?u=41f96ef81a9e369790ea5f0bb&amp;id=e4ef6dcf6e&amp;f_id=0045efe6f0"
                method="post" id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form" className="validate"
                target="_blank">
                <div id="mc_embed_signup_scroll">
                  {/* <!-- name & surname --> */}
                  <div className="columns form-cols">
                    <div className="column">
                      <div className="mc-field-group">
                        <label
                          htmlFor="mce-FNAME">First Name
                        </label>
                        <input type="text"
                          name="FNAME" className=" text" id="mce-FNAME" defaultValue="" />
                      </div>
                    </div>
                    <div className="column">
                      <div
                        className="mc-field-group">
                        <label htmlFor="mce-LNAME">Last Name
                        </label>
                        <input type="text" name="LNAME" className=" text"
                          id="mce-LNAME" defaultValue="" />
                      </div>
                    </div>
                  </div>
  
                  {/* <!-- email --> */}
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address <span
                        className="required">required</span>
                    </label>
                    <input type="email"
                      name="EMAIL" className="required email" id="mce-EMAIL" required
                      defaultValue="" />
                  </div>
  
                  {/* <!-- responses --> */}
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response"
                      style={{display: 'none'}}
                      ></div>
                    <div className="response" id="mce-success-response"
                      style={{display: 'none'}}></div>
                  </div>
                  <div 
                      style={{position: 'absolute', left: '-5000px'}}
                    aria-hidden="true">
                    /* real people should not fill this in and expect good things
                    - do not remove this or risk form bot signups */
                    <input type="text"
                      name="b_41f96ef81a9e369790ea5f0bb_e4ef6dcf6e" tabIndex="-1"
                      defaultValue="" />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot buttons">
                      <input type="submit" name="subscribe"
                        id="mc-embedded-subscribe" className="button"
                        defaultValue="Subscribe" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
  
        <script type="text/javascript"
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script type="text/javascript"
            dangerouslySetInnerHTML={{__html: `
            (function($) {window.fnames = new Array(); 
                window.ftypes = new Array();
                fnames[0]='EMAIL';
                ftypes[0]='email';
                fnames[1]='FNAME';
                ftypes[1]='text';
                fnames[2]='LNAME';
                ftypes[2]='text';
                fnames[3]='ADDRESS';
                ftypes[3]='address';
                fnames[4]='PHONE';
                ftypes[4]='phone';
                fnames[5]='BIRTHDAY';
                ftypes[5]='birthday';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
            `}}

            >
                {/* {
                    (
                        function($) {window.fnames = new Array(); 
                            window.ftypes = new Array();
                            fnames[0]='EMAIL';
                            ftypes[0]='email';
                            fnames[1]='FNAME';
                            ftypes[1]='text';
                            fnames[2]='LNAME';
                            ftypes[2]='text';
                            fnames[3]='ADDRESS';
                            ftypes[3]='address';
                            fnames[4]='PHONE';
                            ftypes[4]='phone';
                            fnames[5]='BIRTHDAY';
                            ftypes[5]='birthday';
                        }(jQuery)
                    );
                    var $mcj = jQuery.noConflict(true);  
                } */}
        </script>
  
        </div>
        );
      }
  }

export default SignupForm;