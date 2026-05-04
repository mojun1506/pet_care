"use client";

import { type FormEvent, useMemo, useState } from "react";
import {
  Bath,
  CalendarCheck,
  CalendarDays,
  CarFront,
  Cat,
  Check,
  ChevronLeft,
  ChevronRight,
  Dog,
  Droplets,
  HeartHandshake,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const defaultArrivalTime = useMemo(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}T09:30`;
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <header className="topbar">
          <nav className="shell nav" aria-label="主导航">
            <a className="brand" href="#top" aria-label="毛茸日常首页">
              <span className="brand-mark"><PawPrint aria-hidden="true" /></span>
              <span>毛茸日常</span>
            </a>
            <div className="nav-links" aria-label="页面分区">
              <a href="#services">服务</a>
              <a href="#experience">流程</a>
              <a href="#shop">门店</a>
              <a href="#reviews">评价</a>
            </div>
            <div className="nav-actions">
              <a className="icon-btn" href="tel:400-886-1024" aria-label="电话咨询" title="电话咨询"><Phone /></a>
              <a className="btn primary" href="#booking"><CalendarCheck />预约洗护</a>
            </div>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero">
            <div className="shell hero-grid">
              <div>
                <span className="eyebrow"><Sparkles />一宠一池 · 可视化洗护 · 低压安抚</span>
                <h1>把洗澡这件小事，变成宠物愿意来的日常。</h1>
                <p className="lead">犬猫基础洗护、造型精修、皮毛 SPA 和日常护理都在一间明亮的小店里完成。预约制接待，不催不挤，每只宠物都有自己的节奏。</p>
                <div className="hero-actions">
                  <a className="btn primary" href="#booking"><CalendarDays />查看今日档期</a>
                  <a className="btn secondary" href="#services"><Scissors />洗护价目</a>
                </div>
                <div className="metrics" aria-label="门店数据">
                  <div className="metric"><strong>32min</strong><span>平均到店接待等待</span></div>
                  <div className="metric"><strong>4.9/5</strong><span>近 90 天顾客评分</span></div>
                  <div className="metric"><strong>1:1</strong><span>洗护师全程照看</span></div>
                </div>
              </div>
      
              <div className="hero-media">
                <div className="photo-frame">
                  <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=980&q=85" alt="洗护后坐在明亮空间里的狗狗" />
                </div>
                <aside className="booking-card" aria-label="今日预约状态">
                  <div className="card-head">
                    <strong>今日可约</strong>
                    <span className="status">剩 4 个档</span>
                  </div>
                  <div className="booking-row">
                    <span className="avatar"><Dog /></span>
                    <span><strong>小型犬精洗</strong><small>14:30 · 含指甲与耳道</small></span>
                    <strong>¥128</strong>
                  </div>
                  <div className="booking-row">
                    <span className="avatar"><Cat /></span>
                    <span><strong>猫咪舒缓洗</strong><small>16:00 · 独立安静间</small></span>
                    <strong>¥168</strong>
                  </div>
                </aside>
              </div>
            </div>
          </section>
      
          <section id="services">
            <div className="shell">
              <div className="section-head">
                <h2>按毛孩状态选择，不把服务做成流水线。</h2>
                <p>每项服务到店后都会先做皮毛与情绪评估，洗护师会根据毛量、皮肤、打结和胆量调整手法。</p>
              </div>
      
              <div className="services">
                <article className="service">
                  <span className="service-icon"><Bath /></span>
                  <h3>基础精洗</h3>
                  <p>清洁、吹干、梳理、脚底毛、指甲和耳道基础护理。</p>
                  <strong className="price">¥98 起</strong>
                  <small>适合日常清洁</small>
                </article>
                <article className="service">
                  <span className="service-icon"><Scissors /></span>
                  <h3>造型精修</h3>
                  <p>按品种与生活习惯修剪，保留好打理的蓬松度。</p>
                  <strong className="price">¥188 起</strong>
                  <small>含造型沟通</small>
                </article>
                <article className="service">
                  <span className="service-icon"><Droplets /></span>
                  <h3>皮毛 SPA</h3>
                  <p>温和浴液、护毛素与低温风干，适合换季和干燥毛发。</p>
                  <strong className="price">¥158 起</strong>
                  <small>敏感肌可选</small>
                </article>
                <article className="service">
                  <span className="service-icon"><ShieldCheck /></span>
                  <h3>局部护理</h3>
                  <p>洁牙、泪痕、肉垫养护、肛门腺等细节项目。</p>
                  <strong className="price">¥39 起</strong>
                  <small>可单独加购</small>
                </article>
              </div>
            </div>
          </section>
      
          <section className="experience" id="experience">
            <div className="shell experience-grid">
              <div className="wide-photo">
                <img src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=960&q=85" alt="宠物洗护师正在给狗狗梳理毛发" />
              </div>
              <div className="steps">
                <div className="section-head">
                  <h2>洗护过程透明，主人不用靠猜。</h2>
                </div>
                <article className="step">
                  <strong>01</strong>
                  <div>
                    <h3>到店评估</h3>
                    <p>记录体重、皮肤、耳道、打结和性格状态，先确认宠物能接受的节奏。</p>
                  </div>
                </article>
                <article className="step">
                  <strong>02</strong>
                  <div>
                    <h3>分区洗护</h3>
                    <p>一宠一池，工具消毒，敏感宠物会使用独立安静时段和低噪吹风。</p>
                  </div>
                </article>
                <article className="step">
                  <strong>03</strong>
                  <div>
                    <h3>完成反馈</h3>
                    <p>交付洗护记录、毛发建议和下次护理间隔，照片同步给主人留档。</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section id="shop">
            <div className="shell">
              <div className="section-head">
                <h2>门店信息与店内环境</h2>
                <p>以中国高端宠物洗护店为灵感，接待、洗护、造型分区明确，动线安静，适合胆小宠物慢慢适应。</p>
              </div>
              <div className="shop-strip">
                <div className="shop-panel environment-panel">
                  <div className="carousel" aria-label="店内环境轮播">
                    <div className="carousel-dots" aria-label="切换店内环境">
                      <button className="is-active" type="button" aria-label="接待前厅"></button>
                      <button type="button" aria-label="洗护 SPA 区"></button>
                      <button type="button" aria-label="造型休息区"></button>
                    </div>
                    <div className="carousel-controls">
                      <button type="button" className="carousel-prev" aria-label="上一张"><ChevronLeft /></button>
                      <button type="button" className="carousel-next" aria-label="下一张"><ChevronRight /></button>
                    </div>
                    <div className="carousel-track">
                      <figure className="carousel-slide">
                        <img src="/assets/shop-reception.png" alt="中国高端宠物洗护店接待前厅，木饰面、石材前台和柔和灯光" />
                        <figcaption className="slide-caption">
                          <strong>接待前厅</strong>
                          <span>石材前台、温润木饰面与低饱和玉绿色，第一眼就把紧张感降下来。</span>
                        </figcaption>
                      </figure>
                      <figure className="carousel-slide">
                        <img src="/assets/shop-spa-room.png" alt="中国高端宠物洗护店洗护 SPA 区，独立玻璃隔间和专业浴缸" />
                        <figcaption className="slide-caption">
                          <strong>洗护 SPA 区</strong>
                          <span>独立洗护位、一宠一池、低噪吹风区，卫生和舒适度都看得见。</span>
                        </figcaption>
                      </figure>
                      <figure className="carousel-slide">
                        <img src="/assets/shop-styling-lounge.png" alt="中国高端宠物洗护店造型与休息区，造型台、产品陈列和茶吧" />
                        <figcaption className="slide-caption">
                          <strong>造型休息区</strong>
                          <span>造型台、产品陈列与主人等候区相邻，完成效果可以当场沟通确认。</span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="shop-panel">
                  <span className="eyebrow"><MapPin />门店信息</span>
                  <h2>周二到周日营业，晚间保留少量预约。</h2>
                  <p>地址：梧桐路 88 号 1F，近地铁 3 号线花园站。到店前 2 小时可免费改期一次。</p>
                  <div className="hours">
                    <div><span>周二 - 周五</span><strong>10:30 - 20:30</strong></div>
                    <div><span>周六 - 周日</span><strong>09:30 - 21:00</strong></div>
                    <div><span>周一</span><strong>店休消杀</strong></div>
                  </div>
                  <div className="shop-details">
                    <div className="shop-detail">
                      <CarFront />
                      <strong>停车</strong>
                      <span>门口 3 个临停位，地下车库可报销 2 小时。</span>
                    </div>
                    <div className="shop-detail">
                      <ShieldCheck />
                      <strong>分区</strong>
                      <span>猫犬分区接待，敏感宠物可预约安静时段。</span>
                    </div>
                    <div className="shop-detail">
                      <Sparkles />
                      <strong>消毒</strong>
                      <span>工具每日消毒，浴缸与台面单宠后清洁。</span>
                    </div>
                    <div className="shop-detail">
                      <MessageCircle />
                      <strong>咨询</strong>
                      <span>电话 400-886-1024，支持微信确认档案。</span>
                    </div>
                  </div>
                  <a className="btn secondary" href="tel:400-886-1024" style={{ marginTop: 22 }}><MessageCircle />电话咨询</a>
                </div>
              </div>
            </div>
          </section>
      
          <section className="legacy-shop">
            <div className="shell shop-strip">
              <div className="shop-panel">
                <span className="eyebrow"><MapPin />门店信息</span>
                <h2>周二到周日营业，晚间保留少量预约。</h2>
                <p>地址：梧桐路 88 号 1F，近地铁 3 号线花园站。到店前 2 小时可免费改期一次。</p>
                <div className="hours">
                  <div><span>周二 - 周五</span><strong>10:30 - 20:30</strong></div>
                  <div><span>周六 - 周日</span><strong>09:30 - 21:00</strong></div>
                  <div><span>周一</span><strong>店休消杀</strong></div>
                </div>
              </div>
              <div className="shop-panel">
                <span className="eyebrow"><HeartHandshake />安心承诺</span>
                <p>洗护前确认禁忌，洗护中不强制按压。使用温和产品，吹风温度可控，工具每日消毒，猫犬分区接待。</p>
                <p>初次到店的胆小宠物，可先安排 15 分钟适应空间。</p>
                <a className="btn secondary" href="tel:400-886-1024" style={{ marginTop: 22 }}><MessageCircle />电话咨询</a>
              </div>
            </div>
          </section>
      
          <section id="reviews">
            <div className="shell">
              <div className="section-head">
                <h2>洗完不止香，回家也好打理。</h2>
                <p>顾客最常提到的是：不催、吹得透、造型自然，还有洗后照片很会拍。</p>
              </div>
              <div className="reviews">
                <article className="review">
                  <div className="stars">★★★★★</div>
                  <p>我家狗很怕吹风，这次没有发抖，洗护师一直在旁边安抚。回家毛很蓬，脚底也修得干净。</p>
                  <small>柚子主人 · 比熊</small>
                </article>
                <article className="review">
                  <div className="stars">★★★★★</div>
                  <p>猫咪第一次洗澡，店里安排了安静房间，还发了过程照片。比想象中顺利太多。</p>
                  <small>团团主人 · 银渐层</small>
                </article>
                <article className="review">
                  <div className="stars">★★★★★</div>
                  <p>没有乱推项目，先讲清楚毛结情况和价格。修完的造型很自然，夏天也不会太秃。</p>
                  <small>奶盖主人 · 贵宾</small>
                </article>
              </div>
            </div>
          </section>
      
          <section className="cta-band" id="booking">
            <div className="shell cta">
              <div>
                <h2>给毛孩留一个舒服的洗护时间。</h2>
                <p>提交后 10 分钟内电话确认体型、服务和准确到店时间。</p>
              </div>
              <form className="form" onSubmit={handleSubmit} aria-label="预约表单">
                <input type="text" name="name" placeholder="宠物名" aria-label="宠物名" required />
                <select name="service" aria-label="服务类型" required>
                  <option value="">选择服务</option>
                  <option>基础精洗</option>
                  <option>造型精修</option>
                  <option>皮毛 SPA</option>
                  <option>局部护理</option>
                </select>
                <input
                  type="datetime-local"
                  name="arrivalTime"
                  aria-label="期望到店时间"
                  defaultValue={defaultArrivalTime}
                  required
                />
                <button className="btn primary" type="submit">{submitted ? <Check /> : <Send />}{submitted ? "已收到" : "提交预约"}</button>
              </form>
            </div>
          </section>
        </main>
      
        <footer>
          <div className="shell footer-grid">
            <span>毛茸日常宠物洗护店 · 400-886-1024</span>
            <span>犬猫分区 / 预约优先 / 工具每日消毒</span>
          </div>
        </footer>
    </>
  );
}
