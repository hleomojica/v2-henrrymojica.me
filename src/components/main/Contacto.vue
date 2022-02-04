<template>
  <section id="contact">
    <div class="title-section">
      <h2>Contact</h2>
    </div>
    <div class="container">
      <div class="effect egeon">
        <div class="buttons w-100">
          <a
            href="https://github.com/hleomojica/"
            target="_blank"
            rel="noopener"
            class="github"
            title="Github"
            ><i class="fa fa-github" aria-hidden="true"></i
          ></a>
          <a
            href="https://linkedin.com/in/hleomojica"
            rel="noopener"
            class="in"
            target="_blank"
            title="Join us on Linked In"
            ><i class="fa fa-linkedin" aria-hidden="true" rel="noopener"></i
          ></a>
           <a
            href="https://twitter.com/hleomojica"
            class="tw"
            target="_blank"
            title="Join me on Twitter"
            rel="noopener"
            ><i class="fa fa-twitter" aria-hidden="true"></i
          ></a>
          <a
            href="https://www.facebook.com/hleomojica"
            class="fb"
            target="_blank"
            title="Join us on Facebook"
            rel="noopener"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>

         
        </div>
      </div>
    </div>
    <div class="title-section"></div>
    <div class="contact-form">
      <form id="form" action="https://formspree.io/f/xrgjpaoo" method="POST">
        <input
          type="email"
          placeholder="Email"
          id="mail-input"
          name="_replyto"
          required
        />
        <textarea placeholder="Your message" name="message" required></textarea>
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style src="../../styles/contacto.scss" lang="scss" scoped/>

