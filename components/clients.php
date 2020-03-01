<section class="clients">
    <div class="clients__row">
        <div class="clients__column clients__column--left">
            <div class="clients__title clients__title--big">Selected clients </div>
            <div class="clients__title clients__title--small">we are proud to have worked with</div>
            <div class="clients__subtitle">From Google to Vayner Media we handle every client with exactly the same successful way that established us in the market. We care.</div>
        </div>
        <div class="clients__column clients__column--right clients__column--grid">
            <?php for ($i = 0; $i < 12; $i++): ?>
                <div class="clients__item">
                    <img src="images/client.png"/>
                </div>
            <?php endfor; ?>
        </div>
    </div>
    <div class="clients__row">
        <a href="#" class="readmore">
            <span>See all the brands</span>
            <span class="readmore__line"></span>
        </a>
    </div>
</section>